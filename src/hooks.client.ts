import { siteCodename, siteVersion } from "$lib/site.config"

function easteregg() {
    // eslint-disable-next-line no-console
    console.log(`%c……我々は望む、七つの嘆きを。……我々は覚えている、ジェリコの古則を。\n――BlueScripture Version${siteVersion}"${siteCodename}"、起動しました。お仕事を始めましょう。`, "font-style: italic;")
}

easteregg()
