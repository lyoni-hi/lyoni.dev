import { b as baseService } from './generic_C82ARzrz.mjs';

const noopService = {
  ...baseService,
  propertiesToHash: ["src"],
  async transform(inputBuffer, transformOptions) {
    return {
      data: inputBuffer,
      format: transformOptions.format
    };
  }
};
var noop_default = noopService;

export { noop_default as default };
//# sourceMappingURL=noop_CMi0N8Zk.mjs.map
