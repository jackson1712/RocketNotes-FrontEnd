import { FiPlus } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';


export function Home() {

    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="Nodejs" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>
            <Content>
            <Section title="Minhas notas">
                <Note data={{
                    title:"React",
                    tags: [
                        {id: '1', name: 'React'},
                        {id: '2', name: 'Node'},
                    ]
            }}/>
            </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    );
}