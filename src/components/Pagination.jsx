export default (props) => {
    return (
        <div className={'pagination'}>
            {props.pages.map((page, index) =>
                <span key={index}
                      className={props.currentPage === page ? 'current_page page' : 'page'}
                      onClick={() => props.setCurrentPage(page)}
                >
                    {page}
                </span>
            )}
        </div>
    )
}