#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <node_api.h>

#include "equal_to.h"
#include "less_than.h"
#include "greater_than.h"
#include "less_than_or_equal_to.h"
#include "greater_than_or_equal_to.h"

napi_value compare(napi_env env, napi_callback_info info){

	int nbr_args = 4;

	size_t argc = nbr_args;
	napi_value argv[nbr_args];
	
	napi_value response;

	char* pend;

	int flag = 0;

	char a[10] = "";
	char b[10] = "";
	char o[10] = "";

	size_t a_copied;
	size_t b_copied;
	size_t o_copied;

	double fa = 0.00;
	double fb = 0.00;

	size_t a_size = sizeof(a);
	size_t b_size = sizeof(b);
	size_t o_size = sizeof(o);

	// Parse arguments.
	napi_get_cb_info(env, info, &argc, argv, NULL, NULL);

	napi_get_value_string_utf8(env, argv[0], &a, a_size, &a_copied);
	napi_get_value_string_utf8(env, argv[2], &b, b_size, &b_copied);
	napi_get_value_string_utf8(env, argv[1], &o, o_size, &o_copied);

	// Map required input fields.
	fa = strtof(a, &pend);
	fb = strtof(b, NULL);

	/* ------------- [ Comparison utilities ] ------------- */

	if (!strcmp(o, "eq")) {
		flag = equal_to(fa, fb);
	} else if (!strcmp(o, "lt")) {
		flag = less_than(fa, fb);
	} else if (!strcmp(o, "gt")) {
		flag = greater_than(fa, fb);
	} else if (!strcmp(o, "lte")) {
		flag = less_than_or_equal_to(fa, fb);
	} else if (!strcmp(o, "gte")) {
		flag = greater_than_or_equal_to(fa, fb);
	}

	napi_create_int32(env, flag, &response);

	return response;

}

