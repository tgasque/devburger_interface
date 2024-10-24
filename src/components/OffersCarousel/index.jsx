import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api'
import { Container, ContainerItems, Title } from './styles';
import formatCurency from '../../utils/formatCurrecy';


export function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('/products')

            const onlyOffer = data.filter(product => product.offer)
            .map(product =>{
              return {...product, formatedPrice: formatCurency(product.price) }
            })

            setOffers(onlyOffer)
            
        }

        loadOffers()
    }, [])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
      return (
        <Container>
            <Title>OFERTAS DO DIA</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass='carousel-item'
            >
                {offers.map((products) => (
                    <ContainerItems key={products.id}imageUrl={products.url}>
                      <p>{products.formatedPrice}</p>
                      <p>{products.name}</p>
                      </ContainerItems>
                ))}

            </Carousel>
        </Container>
    )
}
