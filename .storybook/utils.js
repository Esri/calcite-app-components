import colors from "../node_modules/@esri/calcite-colors/colors.json";
import { DocsPage } from "@storybook/addon-docs/blocks";
export const darkBackground = [
    {
        name: "Dark",
        value: colors["blk-210"],
        default: true
    }
];
/**
 * This transforms a component markdown to properly render in Storybook notes.
 */
export const parseReadme = (content) => {
    return (content
        // markdown uses relative paths for component links
        .replace(/\.\.\//g, "https://github.com/Esri/calcite-app-components/tree/master/src/components/"));
};
export const createComponentHTML = (tagName, attributes, contentHTML) => `<${tagName} ${attributes.map(({ name, value }) => `${name}="${value}"`).join(" ")}>${contentHTML}</${tagName}>`;
export const titlelessDocsPage = () => DocsPage({
    // no title since README already has one
    titleSlot: () => ""
});
