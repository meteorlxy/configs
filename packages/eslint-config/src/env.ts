export const IS_CI = !!process.env.CI;

export const IS_EDITOR =
  !IS_CI &&
  !!(
    process.env.VSCODE_PID ??
    process.env.VSCODE_CWD ??
    process.env.JETBRAINS_IDE ??
    process.env.VIM
  );
