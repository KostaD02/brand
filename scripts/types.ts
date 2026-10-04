import { writeFileSync } from "fs";
import { resolve } from "path";

import ts from "typescript";

import { log } from "./log.ts";

const configPath = resolve(import.meta.dirname, "../tsconfig.json");

export function writeTypeDeclaration(
  entry: string,
  dtsPath: string,
  isSilent = false,
): boolean {
  try {
    const host: ts.ParseConfigFileHost = {
      ...ts.sys,
      onUnRecoverableConfigFileDiagnostic: (diagnostic) => {
        throw new Error(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
      },
    };
    const parsed = ts.getParsedCommandLineOfConfigFile(configPath, undefined, host);

    if (!parsed) {
      throw new Error(`Cannot parse ${configPath}`);
    }

    const program = ts.createProgram([entry], {
      ...parsed.options,
      noEmit: false,
      declaration: true,
      emitDeclarationOnly: true,
    });
    const { diagnostics } = program.emit(undefined, (_, text) => {
      writeFileSync(dtsPath, text, "utf8");
    });

    if (diagnostics.length > 0) {
      throw new Error(
        diagnostics
          .map((diagnostic) =>
            ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
          )
          .join("\n"),
      );
    }

    log(`Wrote ${dtsPath}`, isSilent);

    return true;
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    log(`Error while writing ${dtsPath}: ${error}`, isSilent, true);

    return false;
  }
}
