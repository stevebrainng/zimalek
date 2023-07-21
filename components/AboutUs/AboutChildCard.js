import { Fragment } from "react";
import {
  Content2Column2,
  GeneralMdText,
  GeneralSmText,
  FormLoader,
  ContentFullColumn,
} from "../../styles/GlobalCss";
import { ExpertiseCardChild, 
  ExpertiseCardContent,
  PortfolioCardSection,
  PortfolioContainer,
  PortfolioContentList,
  PortfolioListImg,
  ParallexAnimation,
  OverLayColor,
  ItemListGrid,
  MainCustomButton,
  IsIconButton,
  IconBlockImg,
  buttonAgAnimation,
  ParallexImg,
  ProductsLinks,
 } from "./AboutCompStyles";
import { useAllPortfolioQuery } from "../../redux/services/siteApiSlice";
import Image from "next/image";

import { heroBannerRTLImg, ArrowRight } from "../../assets";

const AboutChildCard = () => {
  const {
    data: isPortfolio,
    isLoading,
    isFetching,
    error,
  } = useAllPortfolioQuery();

  return (
    <Fragment>
      {isLoading || isFetching ? (
        <FormLoader width="30px" height="30px" border="3px solid #d03049" />
      ) : (
        isPortfolio.data.map((item, index) => {
          return (
            <PortfolioContentList key={index} id={item.id}>
              <PortfolioCardSection>
                <OverLayColor />
                <PortfolioListImg>
                  <ParallexAnimation>
                    <ParallexImg src="../static/images/new-tech-img-22.jpg" />
                  </ParallexAnimation>
                </PortfolioListImg>
                <PortfolioContainer>
                  <ItemListGrid>
                    <GeneralMdText
                      fontSize="2.5em"
                      fontWeight="600"
                      lineHeight="33.6px"
                      textTransform="capitalize"
                      color="#f5957d"
                      margin="1rem 0"
                      maxWidth="14em"
                    >
                      {item.caption}
                    </GeneralMdText>
                    <GeneralSmText
                      fontSize="18px"
                      fontWeight="400"
                      lineHeight="24px"
                      textTransform="none"
                      color="#FFFFFF"
                      margin="0 0 2rem 0"
                      height="300px"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    
                    <ProductsLinks href={ item.url }>
                      <MainCustomButton className="IsTranparentDark WideBlock">
                        Project
                        <IsIconButton>
                          <IconBlockImg className="IsTranparent" src="../static/images/icons/arrow-right.svg"
                            layout="fill" />
                        </IsIconButton>
                      </MainCustomButton>
                    </ProductsLinks>
                    <buttonAgAnimation className="IsTranparentDark"></buttonAgAnimation>
                  </ItemListGrid>
                </PortfolioContainer>
              </PortfolioCardSection>
            </PortfolioContentList>
            // <Content2Column2 key={index} id={item.id}>
            //   <ExpertiseCardChild>
            //     <ExpertiseCardContent>
            //       <GeneralMdText
            //         fontSize="24px"
            //         fontWeight="600"
            //         lineHeight="33.6px"
            //         textTransform="capitalize"
            //         color="#342C1B"
            //         margin="1rem 0"
            //       >
            //         {item.caption}
            //       </GeneralMdText>
            //       <GeneralSmText
            //         fontSize="16px"
            //         fontWeight="400"
            //         lineHeight="24px"
            //         textTransform="none"
            //         color="#7a7a7a"
            //         margin="0 0 2rem 0"
            //         height="300px"
            //         dangerouslySetInnerHTML={{ __html: item.description }}
            //       />
            //     </ExpertiseCardContent>
            //   </ExpertiseCardChild>
            // </Content2Column2>
          );
        })
      )}
    </Fragment>
  );
};

export default AboutChildCard;
