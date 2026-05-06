

function menu (props){


    return (
        <div>
            {props.rol === "admin" ? (
                <div>
                    <button></button>
                </div>
                ) : (
                    <div>
                        <button>

                        </button>
                    </div>

                )
            }
        </div>
    )
}

export default menu;