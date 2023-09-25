import SocialIcons from "./SocailIcons";
import { Container } from "./Styles/Components.styled";
import { Flex } from "./Styles/Flex.styled";
import { FooterStyled } from "./Styles/Footer.styled";


export default function Footer() {
    return (
        <FooterStyled>
            <Container>
                <img src='./images/logo_white.svg' alt='' />
                <Flex>
                    <ul>
                        <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </li>
                        <li>01140471628</li>
                        <li>mosallmym@gmail.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    <SocialIcons />
                </Flex>
                <p>&copy; 2023 El-Mosallmy. All rights reserved</p>
            </Container>
        </FooterStyled>
    )
}