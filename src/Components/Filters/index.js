import { FaSortAmountDown, FaBed, FaRupeeSign, FaCalendarAlt } from 'react-icons/fa';

const Filters = () => {
    return (
        <div className='filters' style={styles.filtersContainer}>
            <div className='m-0 p-0'>
            <label htmlFor="sortBy" style={styles.label}>
                <FaSortAmountDown style={styles.icon} /> Sort By:
            </label>
            <select id="sortBy" style={styles.select}>
                <option value="price">Price</option>
                <option value="distance">Distance</option>
            </select>
            </div>
          
           <div>
           <label htmlFor="hostelType" style={styles.label}>
                <FaBed style={styles.icon} /> Hostel Type:
            </label>
            <select id="hostelType" style={styles.select}>
                <option value="all">All</option>
                <option value="dormitory">Dormitory</option>
                <option value="privateRoom">Private Room</option>
                <option value="sharedRoom">Shared Room</option>
            </select>
           </div>
          
          <div>
          <label htmlFor="priceRange" style={styles.label}>
                <FaRupeeSign style={styles.icon} /> Price Range:
            </label>
            <select id="priceRange" style={styles.select}>
                <option value="all">All</option>
                <option value="3000-6000">₹3000 - ₹6000</option>
                <option value="6000-10000">₹6000 - ₹10000</option>
                <option value="10000+">Above ₹10000</option>
            </select>
          </div>

        
            <div>
            <label htmlFor="availability" style={styles.label}>
                <FaCalendarAlt style={styles.icon} /> Availability:
            </label>
            <select id="availability" style={styles.select}>
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="booked">Booked</option>
            </select>
            </div>
         
        </div>
    );
};

const styles = {
    filtersContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap', // Add flexWrap property
    },
    label: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 'semibold',
        color: '#081735',
    },
    icon: {
        marginRight: '5px',
        color: '#081735'
    },
    select: {
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '200px',
        color: '#081735'
    },
};

export default Filters;
