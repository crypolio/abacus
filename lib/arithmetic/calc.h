#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <node_api.h>

#include "plus.h"
#include "power.h"
#include "minus.h"
#include "modulo.h"
#include "division.h"
#include "multiply.h"

#define MIN_PRECISION 4
#define MAX_PRECISION 8
#define MAX_BUFFER_SIZE 100

/**
 * Set precision.
 * @params {int} p - Precision.
 * @returns Returns adjusted precision within allowed range.
 */
int set_precision(int p) {
	int precision = 0;

	if (p >= MAX_PRECISION)
		precision = MAX_PRECISION;

	if (p <= MIN_PRECISION)
		precision = MIN_PRECISION;

	return precision;
}

napi_value calc(napi_env env, napi_callback_info info){

	char* pend;

	int nbr_args = 4;

	napi_value response;

	size_t argc = nbr_args;
	napi_value argv[nbr_args];

	int p = 0, precision = 8;

	char a[10], b[10], o[10] = "";

	char buf[MAX_BUFFER_SIZE] = "";

	size_t a_copied, b_copied, o_copied;

	double fa = 0.00, fb = 0.00, amount = 0.00;

	size_t a_size = sizeof(a), b_size = sizeof(b), o_size = sizeof(o);

	// Parse arguments.
	napi_get_cb_info(env, info, &argc, argv, NULL, NULL);

	napi_get_value_int32(env, argv[3], &p);

	napi_get_value_string_utf8(env, argv[0], &a, a_size, &a_copied);
	napi_get_value_string_utf8(env, argv[2], &b, b_size, &b_copied);
	napi_get_value_string_utf8(env, argv[1], &o, o_size, &o_copied);

	// Convert string params to double.
	fa = strtof(a, &pend);
	fb = strtof(b, NULL);

	// Set precision size.
	precision = set_precision(p);

	if (!strcmp(o, "plus")) {
		amount = plus(fa, fb);
	} else if (!strcmp(o, "minus")) {
		amount = minus(fa, fb);
	} else if (!strcmp(o, "power")) {
		amount = power(fa, fb);
	} else if (!strcmp(o, "modulo")) {
		amount = modulo(fa, fb);
	} else if (!strcmp(o, "division")) {
		amount = division(fa, fb);
	} else if (!strcmp(o, "multiply")) {
		amount = multiply(fa, fb);
	}

	sprintf(buf, "%.*lf", precision, amount);

	napi_create_string_utf8(env, buf, strlen(buf), &response);

	return response;

}

