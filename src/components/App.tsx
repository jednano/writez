import * as React from 'react'

import { spin } from '../animations'
import styled from '../styled-components'

import logo from '../images/logo.svg'

const Root = styled.div`
	text-align: center;
`

const Logo = styled.img`
	animation: ${spin} infinite 20s linear;
	height: 80px;
`

const Header = styled.header`
	background-color: #222;
	height: 150px;
	padding: 20px;
	color: white;
`

const Title = styled.h1`
	font-size: 1.5em;
`

const Intro = styled.p`
	font-size: large;
`

export default class App extends React.PureComponent {
	public render() {
		return (
			<Root>
				<Header>
					<Logo src={logo} alt="logo" />
					<Title>Welcome to React</Title>
				</Header>
				<Intro>
					To get started, edit <code>src/App.tsx</code> and save to reload.
				</Intro>
			</Root>
		)
	}
}
