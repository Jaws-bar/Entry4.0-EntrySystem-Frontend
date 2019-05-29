import styled from "styled-components";
import { Link } from "react-router-dom";

// HeadLine
export const HeadLineCover = styled.div`
  width: 1140px;
  margin: 0 auto;
  height: 260px;
`;

export const HeadLineCoverSubText = styled.h4`
  padding-top: 125px;
  font-weight: 500;
  font-size: 20px;
  height: 21px;
  line-height: 21px;
  color: #000000;
`;

export const HeadLineCoverTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  height: 64.5px;
  line-height: 37px;
  color: #000000;
  padding: 10px 0 15px;
  border-bottom: 2.5px solid #70b1ba;
  box-sizing: border-box;
  letter-spacing: -2px;
  padding-right: 50px;
  width: fit-content;
`;

// CommonButtons
export const ButtonComponent = styled.div`
  width: 1140px;
  height: 25vh;
  margin: 0 auto;
  position: relative;
`;

export const AcceptButtonComponent = styled.div`
  width: 100%;
  position: relative;
`;

export const ButtonComponentCover: any = styled(Link)`
  position: absolute;
  top: 25px;
  width: 150px;
  height: 50px;
  color: ${(props: any) => (props.isDisable ? "#979797" : "#296169")};
  border-radius: 5px;
  background-color: ${(props: any) =>
    props.isDisable ? "#f7fbfc" : " #f7fbfc"};
  border: 1px solid #5f8a90;
  border-color: ${(props: any) => props.isDisable && "#a7a7a7"};
  outline: none;
  cursor: pointer;
  transition: 0.5s;

  &:active {
    background-color: #d8e6e9;
  }

  left: ${(props: any) => props.prev && 0};
  right: ${(props: any) => props.next && 0};
`;

export const ButtonComponentArrow: any = styled.span`
  font-size: 19px;
  color: ${(props: any) => props.isDisable && "#979797"};
  float: ${(props: any) => (props.prev ? "left" : "right")};
  margin-left: ${(props: any) => props.prev && "13px"};
  margin-right: ${(props: any) => props.next && "13px"};
`;

export const ButtonComponentText: any = styled.span`
  font-size: 18px;
  color: ${(props: any) => props.isDisable && "#979797"};
  float: ${(props: any) => (props.prev ? "right" : "left")};
  margin-top: 2px;
  margin-right: ${(props: any) => props.prev && "14px"};
  margin-left: ${(props: any) => props.next && "14px"};
`;

// ToastrBar
export const ToastrBarContainer = styled.div`
  position: fixed;
  z-index: 999999;
  top: 12px;
  right: 12px;
  transition: 0.2s;

  & * {
    box-sizing: border-box;
  }
`;

export const ToastrBarContents: any = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 15px 15px 15px 50px;
  width: 300px;
  border-radius: 3px 3px 3px 3px;
  background-color: #030303;
  background-color: ${(props: any) =>
    props.toastrState === "success" && "#51a351"};
  background-color: ${(props: any) =>
    props.toastrState === "error" && "#bd362f"};
  background-color: ${(props: any) =>
    props.toastrState === "info" && "#2f96b4"};
  background-color: ${(props: any) =>
    props.toastrState === "warning" && "#f89406"};
  background-position: 15px;
  background-repeat: no-repeat;
  box-shadow: 0 0 12px #999;
  color: #fff;
  opacity: 0.8;

  background-image: ${(props: any) =>
    props.toastrState === "info" &&
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=")'} !important;

  background-image: ${(props: any) =>
    props.toastrState === "error" &&
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII="'} !important;

  background-image: ${(props: any) =>
    props.toastrState === "success" &&
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==")'} !important;

  background-image: ${(props: any) =>
    props.toastrState === "warning" &&
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=")'} !important;

  &:hover {
    box-shadow: 0 0 12px #000;
    opacity: 1;
    cursor: pointer;
  }
`;

export const ToastrBarProgress: any = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 300px;
  height: 4px;
  background-color: #000;
  opacity: 0.4;
  animation: widthChanger;
  animation-timing-function: linear;
  animation-duration: ${(props: any) => `${props.timer}s`};
  animation-fill-mode: forwards;

  @keyframes widthChanger {
    from {
      width: 300px;
    }

    to {
      width: 0px;
    }
  }
`;

export const ToastrBarTitle = styled.div`
  font-weight: 700;
`;
export const ToastrBarMessage = styled.div`
  word-wrap: break-word;
`;
