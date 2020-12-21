import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ActionButton from 'react-native-action-button';
import Storefront from '../../assets/icons/Storefront.svg';
import GroupAdd from '../../assets/icons/GroupAdd.svg';

const actionItem = [
  {
    path: 'AddRetailer',
    title: 'Create Retailer',
    icon: <Storefront width={30} height={30} />,
    permission: 'createRetailer',
    type: 'Create',
  },
  {
    path: 'UnplannedVisit',
    title: 'Unplanned Visit',
    icon: <GroupAdd width={30} height={30} />,
    permission: 'unplannedVisit',
    type: 'Create',
  },
];

const Fab = ({ onSelect }) => (
  <ActionButton
    size={48}
    buttonColor="#79a4eb"
    bgColor="rgba(255,255,255,0.9)"
    backgroundTappable={false}>
    {actionItem.map(item => (
      <ActionButton.Item
        key={item}
        buttonColor="#fff"
        textStyle={{ color: '#000' }}
        onPress={() => onSelect(item.path)}
        useNativeFeedback
        {...item}>
        {item.icon}
      </ActionButton.Item>
    ))}
  </ActionButton>
);

Fab.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default memo(Fab);