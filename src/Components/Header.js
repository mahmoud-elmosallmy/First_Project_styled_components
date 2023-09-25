import { Button } from "./Styles/Button.styled";
import { Container } from "./Styles/Components.styled";
import { Flex } from "./Styles/Flex.styled";
import { Image, Logo, Nav, StyledHeader } from "./Styles/Header.styled";

export default function Header() {
    return (
        <StyledHeader bg="red">
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt="" />
                    <Button>Try Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>
                            Mahmoud EL Mosallmy re-imagines the way we build communities. You have a voice,
                            but so does your audience. Create connections with your users as
                            you engage in genuine discussion.
                        </p>
                        <Button bg="#ff0099" color="#fff">
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src='./images/illustration-mockups.svg' alt="" />
                </Flex>
            </Container>
        </StyledHeader>
    )
}