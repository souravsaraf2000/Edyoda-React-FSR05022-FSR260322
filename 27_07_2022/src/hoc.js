export const hoc = (Component) => {
    function EnhancedComponent(){
        return <div style={{backgroundColor: 'lightblue'}}><Component val={100}/></div>
    }
    return EnhancedComponent;
}