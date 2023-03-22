const CUARRANY_FORMATER =   new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency"
});
const CurrancyFormat= (number)=>{
 return CUARRANY_FORMATER.format(number);
}
export default CurrancyFormat ; 