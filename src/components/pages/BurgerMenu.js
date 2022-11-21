import Nav from "../Nav";

function BurgerMenu ({active, setActive}) { 
    return (
        <div onClick={() => setActive(false)} className={active ? "burger active" : "burger"}>
            <button className="burger__close">X</button>
            <div className="burger__content">
                <ul className="header__utility__mob">
					<li className="header__cart__mob"><a href="/cart/">Cart</a></li>
					<li className="header__user__mob"><a href="/login/">User</a></li>
			    </ul>

                <div className="header__nav__mob">
                    <h3>Categories</h3>   
					<Nav/>
				</div> 
            </div>
        </div>
    )
}

export default BurgerMenu;