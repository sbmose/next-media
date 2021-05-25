import { useStateContext } from "../../HBOProvider"
import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal"


const Header = (props) => {
  const globalState = useStateContext()
  return(<header className="top-header">
    <div className="top-header__left-side">
      <div className="top-header__menu-btn" onClick={() => globalState.setSideNavOpenAction(true)}>
        <i className="fas fa-bars"/>
      </div>
      <div className="top-header__search-btn">
        <i className="fas fa-search"/>
      </div>
    </div>
    <div className="top-header__logo"></div>
    <div className="top-header__account" onClick={() => globalState.setAccountModalOpenAction(true)}>
      <img src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" className="top-header__user-img"/>
      <div className="top-header__user-name">Bryant</div>
    </div>
    <Account />
    <SearchModal />
  </header>)
}

export default Header;