import React, { useState, useEffect, MouseEventHandler } from 'react';
import { Product } from '../interfaces';
import { GlobalStyle, ProductImg } from '../styles';
import { match } from 'react-router-dom';
import { dummyProducts } from '../../../dummyProducts';
import { MainHeader } from '../mainHeader';
import { ProductPageMainImg } from './productPageMainImg';
import { ProductPageImagesCarousel } from './productPageImagesCarousel'

import { ProductPageMain, ProductTitle, Preview, Purchasing, AddToCartButton } from './styles';
import { ProductImagesList } from './productImagesList';


interface Params {
  id: string | undefined;
}

interface Props {
  match: match<Params>;
}

export const ProductPage: React.FC<Props> = ({ match: {params: { id }} }) => {
  const [product, setProduct] = useState<Product>();
  const [featuredImg, setFeaturedImg] = useState<string>();
  const [fullFeaturedImgIndex, setFullFeaturedImgIndex] = useState<number>(0);

  const imgMouseOverHandler: MouseEventHandler = (e) => {
    const element = e.target;
    const url = element.src;
    setFeaturedImg(url);
  }

  const imgListMouseLeaveHandler = (url: string) => {
    setFeaturedImg(url);
  }

  const imgClickHandler = (index: number, url: string) => {
    setFullFeaturedImgIndex(index);
    setFeaturedImg(url);
  }

  useEffect(() => {
    for (let listing of dummyProducts) {
      if (listing.id === Number(id)) {
        setProduct(listing);
        break;
      }
    }
  }, []);


  if (!product) {
    return <h1>LOADING</h1>
  } else {
    return (
      <>
        <GlobalStyle />
        <MainHeader />
        <ProductPageMain>
          <Preview>
            {product.images.length > 4 ?
              <ProductPageImagesCarousel
                imgClickHandler={imgClickHandler}
                imgListMouseLeaveHandler={imgListMouseLeaveHandler}
                imgMouseOverHandler={imgMouseOverHandler}
                images={product.images}
                fullFeaturedImgIndex={fullFeaturedImgIndex}
                setFullFeaturedImgIndex={setFullFeaturedImgIndex}
                setFeaturedImg={setFeaturedImg}
              /> :
              <ProductImagesList
                images={product.images}
                imgClickHandler={imgClickHandler}
                imgListMouseLeaveHandler={imgListMouseLeaveHandler}
                imgMouseOverHandler={imgMouseOverHandler}
                fullFeaturedImgIndex={fullFeaturedImgIndex}
              />
            }

            <ProductPageMainImg url={featuredImg || product.imageMainUrl} />
          </Preview>
          <Purchasing>
            <ProductTitle>{product.title}</ProductTitle>
            <h2 style={{ display: 'inline', paddingRight: '5px' }}>
              ${product.price}</h2>
            <h4 style={{ color: 'gray', display: 'inline', }}>
              + {product.shipping} shipping
            </h4>
            <hr style={{ height: '0px', borderColor: 'black', backgroundColor: 'black', margin: '20px 0px', borderWidth: '1px' }}/>
            <p style={{marginBottom: '20px'}}>
              {product.description}
            </p>
            <AddToCartButton>
              Add to Cart
            </AddToCartButton>
          </Purchasing>
        </ProductPageMain>
      </>

    );
  }
}