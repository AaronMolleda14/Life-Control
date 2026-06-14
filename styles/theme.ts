// app/styles/theme.ts

import { colors } from "./colors";

export const theme = {
  light: {
    background: colors.neutral[100],

    surface: colors.neutral[200],

    surfaceHover: colors.neutral[300],

    border: colors.neutral[400],

    textPrimary: colors.text.primary,

    textSecondary: colors.neutral[600],

    primary: colors.identity.blue400,

    primaryHover: colors.identity.blue500,

    success: colors.status.success,

    warning: colors.status.warning,

    danger: colors.status.danger,
  },

  dark: {
    background: colors.neutral[800],

    surface: colors.neutral[700],

    surfaceHover: colors.neutral[600],

    border: colors.neutral[500],

    textPrimary: colors.text.inverse,

    textSecondary: colors.neutral[300],

    primary: colors.identity.blue400,

    primaryHover: colors.identity.blue500,

    success: colors.status.success,

    warning: colors.status.warning,

    danger: colors.status.danger,
  },
};