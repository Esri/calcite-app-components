
/*
** Hack to allow overriding this file. Need to re-implement Stencil code
** Source: <projectRoot>\node_modules\@stencil\core\testing\jest-setuptestframework.js
** Reference: https://github.com/ionic-team/stencil/blob/master/src/testing/jest/jest-setup-test-framework.ts
**            https://github.com/ionic-team/stencil/blob/master/src/testing/index.ts#L6
** Open Issue: https://github.com/ionic-team/stencil/issues/1634
*/

const { jestSetupTestFramework } = require('@stencil/core/dist/testing');
jestSetupTestFramework();
// End Hack
