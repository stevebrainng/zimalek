import React from 'react';
import styled from 'styled-components';
import { useAllPortfolioQuery } from "../../redux/services/siteApiSlice";
import { FormLoader } from "../../styles/GlobalCss"; // Update the path to FormLoader
import { ParallexImg } from "../AboutUs/AboutCompStyles"; // Update the import path

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const PortfolioItem = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    grid-column: span 2;
  }
`;

const PortfolioItemContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const PortfolioImageContainer = styled.div`
  flex: 1;
`;

const PortfolioImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

const PortfolioInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const PortfolioTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const PortfolioDescription = styled.p`
  margin: 10px 0;
`;

const PortfolioButton = styled.a`
  display: inline-block;
  background-image: linear-gradient(to right, #543a7e, #d03049);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled.img`
  margin-left: 10px;
  padding: 5px;
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(0, 0, 0, 0.2);
  margin-left: auto;
`;

const PortfolioShowcase = () => {
    const { data: responseData, isLoading, isError, isFetching } = useAllPortfolioQuery();

    const portfolioData = responseData?.data || [];

    return (
        <div>
            {isLoading || isFetching ? (
                <FormLoader width="30px" height="30px" border="3px solid #d03049" />
            ) : (
                <PortfolioGrid>
                    {portfolioData.map(item => (
                        <PortfolioItem key={item.id}>
                            <PortfolioImageContainer>
                                {item.image ? (
                                    <PortfolioImage src={item.image} alt={item.caption} />
                                ) : (
                                    <ParallexImg src="../static/images/new-tech-img-22.jpg" />
                                )}
                            </PortfolioImageContainer>
                            <PortfolioItemContent>
                                <PortfolioInfo>
                                    <PortfolioTitle>{item.caption}</PortfolioTitle>
                                    <PortfolioDescription
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                    <PortfolioButton
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                        <ArrowIcon src="../static/images/icons/arrow-right.svg" alt="Arrow Right" />
                                    </PortfolioButton>
                                </PortfolioInfo>
                            </PortfolioItemContent>
                        </PortfolioItem>
                    ))}
                </PortfolioGrid>
            )}
        </div>
    );
};

export default PortfolioShowcase;
