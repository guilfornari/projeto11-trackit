import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	* {
		box-sizing: border-box;
	}

	body {
		width: 100%;
		height: 100%;
		font-family: "Lexend Deca", sans-serif;
		font-weight: 400;
	}

	button {
		border-style: none;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;

		&:disabled {
			background-color: lightgray;
		}
	}
`;

export default GlobalStyle;