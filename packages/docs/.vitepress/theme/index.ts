import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import MermaidComponent from "../mermaid/MermaidComponent.vue"

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component("MermaidComponent", MermaidComponent)
	},
} satisfies Theme
