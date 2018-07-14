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
        return(
            <table>
                <thead>
                <tr>
                    <th>
                        <button onClick={() => this.props.sortBy('name')}>Name</button>
                    </th>
                    <th>
                        <button onClick={() => this.props.sortBy('address')}>Address</button>
                    </th>
                    <th>
                        <button onClick={() => this.props.sortBy('city')}>City</button>
                    </th>
                    <th>
                        <button onClick={() => this.props.sortBy('region')}>Region</button>
                    </th>
                    <th>
                        <button onClick={() => this.props.sortBy('country')}>Country</button>
                    </th>
                    <th>
                        <button onClick={() => this.props.sortBy('birthday')}>Birthday</button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.data.map(row => (
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.address}</td>
                            <td>{row.city.replace('Ã¯Â¿Â½', 'e')}</td>
                            <td>{FanTable.findRegionAbbreviation(row.region)}</td>
                            <td>{row.country}</td>
                            <td>{row.birthday}</td>
                        </tr>
                    ) )
                }

                </tbody>
            </table>
        )
    }
}

export default FanTable;
