
import SimpleOrDetailedList from '../../molecules/simpleOrDetailedList/simpleOrDetailedList';
import DrawerMenu from '../DrawerNavigator/DrawerMenu';
function BenefiiciaryListScreen({route}) {
  const {newCards = []} = route.params || {};
  return (
    <>
      <DrawerMenu>
        <SimpleOrDetailedList newCards={newCards} />
      </DrawerMenu>
    </>
  );
}

export default BenefiiciaryListScreen;
