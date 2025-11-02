// Types
type ColorName = string;
type ColorScale = Record<string, string>;
export type ColorTokens = Record<string, unknown>;
export type ColorPalette = { name: ColorName; tokens: ColorTokens };

/**
 * Create solid variant tokens
 */
export const createSolidVariant = (name: string, isBright: boolean) => ({
  bg: {
    DEFAULT: {
      value: { _light: `{colors.${name}.9}`, _dark: `{colors.${name}.9}` },
    },
    hover: {
      value: { _light: `{colors.${name}.10}`, _dark: `{colors.${name}.10}` },
    },
  },
  fg: {
    DEFAULT: {
      value: isBright
        ? { _light: `{colors.${name}.12}`, _dark: `{colors.${name}.1}` }
        : { _light: "white", _dark: "white" },
    },
  },
});

/**
 * Create subtle variant tokens
 */
export const createSubtleVariant = (name: string, shade: string) => ({
  bg: {
    DEFAULT: {
      value: { _light: `{colors.${name}.a3}`, _dark: `{colors.${name}.a3}` },
    },
    hover: {
      value: { _light: `{colors.${name}.a4}`, _dark: `{colors.${name}.a4}` },
    },
    active: {
      value: { _light: `{colors.${name}.a5}`, _dark: `{colors.${name}.a5}` },
    },
  },
  fg: {
    DEFAULT: {
      value: {
        _light: `{colors.${name}.${shade}}`,
        _dark: `{colors.${name}.${shade}}`,
      },
    },
  },
});

/**
 * Create surface variant tokens
 */
export const createSurfaceVariant = (
  name: string,
  shade: string,
  opaque?: boolean,
) => {
  const pf = `${opaque ? "" : "a"}`;
  return {
    bg: {
      DEFAULT: {
        value: {
          _light: `{colors.${name}.${pf}2}`,
          _dark: `{colors.${name}.${pf}2}`,
        },
      },
      ...(opaque && {
        hover: {
          value: {
            _light: `{colors.${name}.${pf}3}`,
            _dark: `{colors.${name}.${pf}3}`,
          },
        },
      }),
      active: {
        value: {
          _light: `{colors.${name}.${pf}4}`,
          _dark: `{colors.${name}.${pf}4}`,
        },
      },
    },
    border: {
      DEFAULT: {
        value: {
          _light: `{colors.${name}.${pf}6}`,
          _dark: `{colors.${name}.${pf}6}`,
        },
      },
      hover: {
        value: {
          _light: `{colors.${name}.${pf}7}`,
          _dark: `{colors.${name}.${pf}7}`,
        },
      },
    },
    fg: {
      DEFAULT: {
        value: {
          _light: `{colors.${name}.${shade}}`,
          _dark: `{colors.${name}.${shade}}`,
        },
      },
    },
  };
};

/**
 * Create outline variant tokens
 */
export const createOutlineVariant = (name: string, shade: string) => ({
  bg: {
    hover: {
      value: { _light: `{colors.${name}.a2}`, _dark: `{colors.${name}.a2}` },
    },
    active: {
      value: { _light: `{colors.${name}.a3}`, _dark: `{colors.${name}.a3}` },
    },
  },
  border: {
    DEFAULT: {
      value: { _light: `{colors.${name}.a7}`, _dark: `{colors.${name}.a7}` },
    },
  },
  fg: {
    DEFAULT: {
      value: {
        _light: `{colors.${name}.${shade}}`,
        _dark: `{colors.${name}.${shade}}`,
      },
    },
  },
});

/**
 * Create plain variant tokens
 */
export const createPlainVariant = (name: string, shade: string) => ({
  bg: {
    hover: {
      value: { _light: `{colors.${name}.a3}`, _dark: `{colors.${name}.a3}` },
    },
    active: {
      value: { _light: `{colors.${name}.a4}`, _dark: `{colors.${name}.a4}` },
    },
  },
  fg: {
    DEFAULT: {
      value: {
        _light: `{colors.${name}.${shade}}`,
        _dark: `{colors.${name}.${shade}}`,
      },
    },
  },
});
