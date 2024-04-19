import React from 'react';
import styled from 'styled-components';
import { ReactComponent as East300 } from '../assets/icons/wght300/east_wght300_opsz24.svg';
import { ReactComponent as West300 } from '../assets/icons/wght300/west_300_opsz24.svg';

const StyledButton = styled.button<{
	colorType: 'primary' | 'secondary' | 'tertiary';
}>`
	${({ theme }) => theme.flexSet()}
	${({ theme }) => theme.typography('Button')}
  padding: 16px 24px 14px 24px;
	min-width: 175px;
	width: 100%;
	height: 56px;
	cursor: pointer;
	gap: 8px;
	background-color: ${({ colorType, theme }) => {
		switch (colorType) {
			case 'primary':
				return theme.colors.black;
			case 'secondary':
				return theme.colors.white;
			case 'tertiary':
				return 'inherit';
		}
	}};
	color: ${({ colorType, theme }) => {
		switch (colorType) {
			case 'primary':
				return theme.colors.white;
			case 'secondary':
				return theme.colors.black;
			case 'tertiary':
				return theme.colors.white;
		}
	}};
	border: ${({ colorType, theme }) => {
		switch (colorType) {
			case 'primary':
				return 'none';
			case 'secondary':
				return `1px solid ${theme.colors.black}`;
			case 'tertiary':
				return `1px solid ${theme.colors.white}`;
		}
	}};

	& path {
		fill: ${({ colorType, theme }) => {
			switch (colorType) {
				case 'primary':
					return theme.colors.white;
				case 'secondary':
					return theme.colors.black;
				case 'tertiary':
					return theme.colors.white;
			}
		}};
	}

	&:hover {
		background-color: ${({ colorType, theme }) => {
			switch (colorType) {
				case 'primary':
					return theme.colors.darkgray;
				case 'secondary':
					return theme.colors.black;
				case 'tertiary':
					return theme.colors.white;
			}
		}};
		color: ${({ colorType, theme }) => {
			switch (colorType) {
				case 'primary':
					return theme.colors.white;
				case 'secondary':
					return theme.colors.white;
				case 'tertiary':
					return theme.colors.darkgray;
			}
		}};

		& path {
			fill: ${({ colorType, theme }) => {
				switch (colorType) {
					case 'primary':
						return theme.colors.white;
					case 'secondary':
						return theme.colors.white;
					case 'tertiary':
						return theme.colors.darkgray;
				}
			}};
		}
	}

	&:active {
		background-color: ${({ colorType, theme }) => {
			switch (colorType) {
				case 'primary':
					return theme.colors.black;
				case 'secondary':
					return theme.colors.white;
				case 'tertiary':
					return theme.colors.white;
			}
		}};
		color: ${({ colorType, theme }) => {
			switch (colorType) {
				case 'primary':
					return theme.colors.white;
				case 'secondary':
					return theme.colors.black;
				case 'tertiary':
					return theme.colors.black;
			}
		}};
		border: ${({ colorType, theme }) =>
			colorType === 'secondary' ? `1px solid ${theme.colors.black}` : 'none'};

		& path {
			fill: ${({ colorType, theme }) => {
				switch (colorType) {
					case 'primary':
						return theme.colors.white;
					case 'secondary':
						return theme.colors.black;
					case 'tertiary':
						return theme.colors.black;
				}
			}};
		}
	}

	&:disabled {
		color: ${({ theme }) => theme.colors.gray};
		background-color: ${({ colorType, theme }) =>
			colorType === 'primary' ? theme.colors.lightgray : 'inherit'};
		border: ${({ colorType, theme }) =>
			colorType !== 'primary' ? `1px solid ${theme.colors.lightgray}` : 'none'};
		cursor: not-allowed;

		& path {
			fill: ${({ theme }) => theme.colors.gray};
		}
	}
`;

interface IButton {
	text: string;
	colorType?: 'primary' | 'secondary' | 'tertiary';
	arrowIcon?: 'default' | 'left' | 'right';
	isDisabled?: true | false;
}

const Button = ({
	text,
	colorType = 'primary',
	arrowIcon = 'default',
	isDisabled = false,
}: IButton) => {
	return (
		<StyledButton colorType={colorType} disabled={isDisabled}>
			{arrowIcon === 'left' && <West300 />}
			{text}
			{arrowIcon === 'right' && <East300 />}
		</StyledButton>
	);
};

export default Button;
