import TopNavigator from '../../molecules/TopNavigator/TopNavigator';
import BackSvg from '../../../assets/svgs/BackSvg';
import IconCard from '../../atoms/IconCard/IconCard';
import {Image, View} from 'react-native';
import SimpleOrDetailedList from '../../molecules/simpleOrDetailedList/simpleOrDetailedList';
import {layouts} from '../../../constants/styles';
import DrawerMenu from '../DrawerNavigator/DrawerMenu';
function BenefiiciaryListScreen() {
  return (
    <>
      {/* <DrawerMenu> */}
        <SimpleOrDetailedList />
      {/* </DrawerMenu> */}
    </>
  );
}

export default BenefiiciaryListScreen;
