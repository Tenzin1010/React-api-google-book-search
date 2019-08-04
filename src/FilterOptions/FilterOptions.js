
import React, {Component} from 'react';
import "./FilterOptions.css";

// static version 
// get file props and set up filter options UI since this is the last comp in the tree
class FilterOptions extends Component {
    render() {
        
        // const booktypeOptions = this
        // .props
        // .files
        // .map(
        //   (country, i) => <option value={country.name} key={i}>{country.name}</option>
        // );

        // const printtypeOptions = this.props.files.map()

        return (
            <div className="FilterOptions">
               <div className="FilterOptions__all">
                    <form>
                        <label htmlFor="printtype">Print Type:</label>
                        <select id="printtype" name="printtype"> 
                            <option value="None">Select one... </option>
                            {/* {printOptions} */}
                        </select>
                    
                    
                        <label htmlFor="booktype">Book Type:</label>
                        <select id="booktype" name="booktype"> 
                            <option value="None">Select one... </option>
                            {/* {booktypeOptions} */}
                        </select>
                   </form>
               </div>
            </div>
        )
    }
    
}
export default FilterOptions