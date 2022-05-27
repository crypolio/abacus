#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <node_api.h>

#include "arithmetic/calc.h"
#include "correlation/compare.h"

napi_value Init(napi_env env, napi_value exports) {

	napi_value fn_arithmetic;
	napi_value fn_correlation;

	napi_create_function(env, NULL, 0, calc, NULL, &fn_arithmetic);
	napi_set_named_property(env, exports, "calc", fn_arithmetic);

	napi_create_function(env, NULL, 0, compare, NULL, &fn_correlation);
	napi_set_named_property(env, exports, "compare", fn_correlation);

	return exports;
}


NAPI_MODULE(NODE_GYP_MODULE_NAME, Init);

