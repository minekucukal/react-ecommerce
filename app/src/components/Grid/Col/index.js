import styled from 'styled-components';

const Col = styled.div`
	 float:left;
    margin-bottom: 20px;
    width:${props => getGridColumnRules(props)};
`;

const getGridColumnRules = props => {
  let styleWidth;
   if (props.m1 || props.t1 || props.d1) {
		 styleWidth = "8.33%";
	 }else if(props.m2 || props.t2 || props.d2) {
		styleWidth = "16.66%"
	 }else if(props.m3 || props.t3 || props.d3){
		styleWidth = "25%"
     }else if(props.m4 || props.t4 || props.d4){
        styleWidth = "33.33%"
     }else if(props.m5 || props.t5 || props.d5){
        styleWidth = "41.66%"
     }else if(props.m6 || props.t6 || props.d6){
        styleWidth = "50%"
     }else if(props.m7 || props.t7 || props.d7){
        styleWidth = "58.33%"
     }else if(props.m8 || props.t8 || props.d8){
        styleWidth = "66.66%"
     }else if(props.m9 || props.t9 || props.d9){
        styleWidth = "75%"
     }else if(props.m10 || props.t10 || props.d10){
        styleWidth = "83.33%"
     }else if(props.m11 || props.t11 || props.d11){
        styleWidth = "91.66%"
     }else if(props.m12 || props.t12 || props.d12){
        styleWidth = "100%"
     }

	 return styleWidth;
};


export default Col;
