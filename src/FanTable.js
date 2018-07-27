import React, {Component} from 'react'

class FanTable extends Component {

    constructor(props) {
        super(props);
    }

    static findRegionAbbreviation(region) {
        let abbreviation = region;
                switch(region){
                    case 'Alberta':
                        abbreviation = 'AB';
                        break;
                    case 'British Columbia':
                        abbreviation = 'BC';
                        break;
                    case 'Manitoba':
                        abbreviation = 'MB';
                        break;
                    case 'New Brunswick':
                        abbreviation = 'NB';
                        break;
                    case 'Newfoundland and Labrador':
                        abbreviation = 'NL';
                        break;
                    case 'Nova Scotia':
                        abbreviation = 'NS';
                        break;
                    case 'Northwest Territories':
                        abbreviation = 'NT';
                        break;
                    case 'Nunavut':
                        abbreviation = 'NU';
                        break;
                    case 'Ontario':
                        abbreviation = 'ON';
                        break;
                    case 'Prince Edward Island':
                        abbreviation = 'PE';
                        break;
                    case 'Quebec':
                        abbreviation = 'QC';
                        break;
                    case 'Saskatchewan':
                        abbreviation = 'SK';
                        break;
                    case 'Yukon':
                        abbreviation = 'YT';
                        break;
                    default:
                        break;
                }
                return abbreviation
    }

    render() {
        let attributes = Object.keys(this.props.data[0]);
        let headers = attributes.map(attribute => {
            return (<th><button onClick={() => this.props.sortBy(attribute)}>{attribute}</button></th>)
        });
        return(
            <table>
                <thead>
                <tr>
                    {headers}
                </tr>
                </thead>
                <tbody>
                {
                    this.props.data.map((row, index) => {
                        let userInfo = attributes.map( attribute => {
                            return(<td key={attribute}>{row[attribute]}</td>)
                        });
                        return (
                            <tr key={index}>
                                {userInfo}
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        )
    }
}

export default FanTable;
