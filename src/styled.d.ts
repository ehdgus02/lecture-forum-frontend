import "styled-components";

declare module  "styled-components" {
    export interface DefaultTheme {
        color: {
            background: {
                default: string;
                paper: string;
            };
            text: {
                default: string;
                disabled: string;
            };
            divider: string;
            primary: string;
            secondary: string;
            success: string;
            error: string;
            warning: string;
            info: string;
        }
    }
}