import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Item extends React.PureComponent {

    /**
     * fired when item is being clicked
     * @returns {*}
     */
    onClick = () => this.props.onClick(this.props.id);

    /**
     * fired when the trash icon is being pressed
     * @returns {*}
     */
    onTrashPressed = (evt) => {
        evt.stopPropagation();
        this.props.onDelete(this.props.id);
    };

    render() {
        const { description, completed } = this.props;

        return (
            <div className={`item ${completed ? 'completed' : 'incompleted'}`} onClick={this.onClick}>
                <span>{description}</span>
                <i onClick={this.onTrashPressed} className="fa fa-trash" />
            </div>
        );
    }
}

Item.propTypes = {
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

Item.defaultProps = {
    completed: false
};

export default Item;
