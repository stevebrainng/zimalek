import styled from "styled-components";

export const ExpertiseCardChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  border-top-radius: 5px;
  border-bottom-radius: 0;
  background: var(--white);
  padding: 1rem 1rem 2rem;
  border: 1px solid #efeef0;
  border-bottom: 5px solid var(--gradient-color-1);
`;

export const ExpertiseCardContent = styled.div`
  height: 200px;

  @media (max-width: 980px) {
    height: auto;
  }
`;

export const PortfolioCardSection = styled.div`
  width: 100%;
  height: 26em;
  text-align: left;
  border: 1px solid #284969;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  padding-top: 4em;
  padding-bottom: 4em;
  display: flex;
  position: relative;
  overflow: hidden;

  @media (max-width: 740px) {
    height: auto;
  }
`;

export const PortfolioContainer = styled.div`
  z-index: 20;
  width: 100%;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 6em;
  padding-right: 6em;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  display: flex;

    @media (max-width: 740px) {
      padding-left: 2em;
      padding-right: 2em;
  }
`;

export const PortfolioContentList = styled.div`
  width: 100%;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5em;
  flex-direction: column;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: space-between;
  align-items: stretch;
  padding: 2%;
  display: flex;
`;

export const PortfolioListImg = styled.div`
  z-index: 1;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

export const ParallexAnimation = styled.div`
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

export const ParallexImg = styled.img`
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const OverLayColor = styled.div`
  z-index: 2;
  mix-blend-mode: multiply;
  background-image: linear-gradient(90deg,#0f1d2b,transparent);
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

export const ItemListGrid = styled.div`
  grid-column-gap: 2em;
  grid-row-gap: 1em;
  flex-direction: row;
  grid-template-rows: auto;
  grid-template-columns: .75fr .75fr .5fr;
  grid-auto-columns: 1fr;
  justify-content: flex-start;
  align-items: center;
  justify-items: start;
  display: grid;

  @media (max-width: 1120px) {
    display: block;
  }
`;

export const MainCustomButton = styled.div`
  z-index: 20;
  grid-column-gap: 2.25em;
  color: #fff;
  background-color: #b14125;
  border-radius: 100px;
  flex-direction: row;
  flex: none;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em 1em 2.2em;
  transition: border-color .2s,color .4s;
  display: flex;
  position: relative;
  overflow: hidden;
  justify-self: end;

  @media (max-width: 450px) {
    grid-column-gap: .8em;
  }

  &:hover {
    background-color: #b14125;
  }

  &.IsTranparentDark {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    color: #fff;
    background-color: rgba(15,29,43,.25);
    border: 1px solid #b14125;

    &:hover {
      border-color: #df795f;
    }
  }

  &.WideBlock {
    max-width: 100%;
    display: flex;
  }
`;

export const ButtonAgAnimation = styled.div`
  z-index: 2;
  background-color: #993117;
  display: none;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  display: block;
  transform: translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;

  &.IsTranparentDark {
    background-color: #993117;
  }
`;

export const IsIconButton = styled.div`
  border: 1px solid rgba(255,255,255,.5);
  border-radius: 20px;
  flex: none;
  padding: .3em .8em;

  &.IsTranparent {
    background-color: transparent;
    border-color: #993117;
  }

  &.WideBlock {
    max-width: 100%;
    display: inline-block;
  }
`;

export const IconBlockImg = styled.img`
  z-index: 10;
  width: 1em;
  height: 1em;
  object-fit: contain;
  font-size: 1.5em;
  position: relative;

  &.IsTranparent {
    background-color: transparent;
    border-color: #993117;
  }
`;

export const ProductsLinks = styled.a`
  text-decoration: none;
  cursor: pointer;
`;