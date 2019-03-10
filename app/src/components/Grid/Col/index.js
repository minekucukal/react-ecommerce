import styled from 'styled-components';

const Col = styled.div`
	 float:left;

   @media (min-width: 0px) and (max-width: 767.99px) { 
      width: ${props => getMobileRules(props)};
   }

   @media (min-width: 768px) and (max-width: 1999.99px) { 
      width: ${props => getTabletRules(props)};
   }

   @media (min-width: 1200px) {
      width: ${props => getDesktopRules(props)};
   }


`;


const getDesktopRules = props => {
   let styleWidth;
   if (props.d1) {
      styleWidth = "8.33%";
   } else if (props.d2) {
      styleWidth = "16.66%"
   } else if (props.d3) {
      styleWidth = "25%"
   } else if (props.d4) {
      styleWidth = "33.33%"
   } else if (props.d5) {
      styleWidth = "41.66%"
   } else if (props.d6) {
      styleWidth = "50%"
   } else if (props.d7) {
      styleWidth = "58.33%"
   } else if (props.d8) {
      styleWidth = "66.66%"
   } else if (props.d9) {
      styleWidth = "75%"
   } else if (props.d10) {
      styleWidth = "83.33%"
   } else if (props.d11) {
      styleWidth = "91.66%"
   } else if (props.d12) {
      styleWidth = "100%"
   }
   return styleWidth;
};

const getTabletRules = props => {
   let styleWidth;
   if (props.t1) {
      styleWidth = "8.33%";
   } else if (props.t2) {
      styleWidth = "16.66%"
   } else if (props.t3) {
      styleWidth = "25%"
   } else if (props.t4) {
      styleWidth = "33.33%"
   } else if (props.t5) {
      styleWidth = "41.66%"
   } else if (props.t6) {
      styleWidth = "50%"
   } else if (props.t7) {
      styleWidth = "58.33%"
   } else if (props.t8) {
      styleWidth = "66.66%"
   } else if (props.t9) {
      styleWidth = "75%"
   } else if (props.t10) {
      styleWidth = "83.33%"
   } else if (props.t11) {
      styleWidth = "91.66%"
   } else if (props.t12) {
      styleWidth = "100%"
   }
   return styleWidth;
};


const getMobileRules = props => {
   let styleWidth;
   if (props.m1) {
      styleWidth = "8.33%";
   } else if (props.m2) {
      styleWidth = "16.66%"
   } else if (props.m3) {
      styleWidth = "25%"
   } else if (props.m4) {
      styleWidth = "33.33%"
   } else if (props.m5) {
      styleWidth = "41.66%"
   } else if (props.m6) {
      styleWidth = "50%"
   } else if (props.m7) {
      styleWidth = "58.33%"
   } else if (props.m8) {
      styleWidth = "66.66%"
   } else if (props.m9) {
      styleWidth = "75%"
   } else if (props.m10) {
      styleWidth = "83.33%"
   } else if (props.m11) {
      styleWidth = "91.66%"
   } else if (props.m12) {
      styleWidth = "100%"
   }
   return styleWidth;
};


export default Col;
