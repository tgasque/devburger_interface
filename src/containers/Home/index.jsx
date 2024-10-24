import { CategoriesCarousel } from '../../components/CategoriesCarousel'
import { OffersCarousel } from '../../components/OffersCarousel'
import { Banner, Container, Content, Offer } from './styles'


export function Home() {
    return (

        <main>
            <Banner>
                <h1>Bem Vindo(a)!</h1>
 

            </Banner>
            <Container>
                < Content>
                    <CategoriesCarousel/>
                    <div>Carrossel de Produtos</div>
                </Content>
                <Offer>
                    <OffersCarousel/>
                    <div>Carrossel de Ofertas</div>
                </Offer>
            </Container>

        </main>
    )
}