
function Toolbar() {
    const containerHeader = {
        alignItems: 'center',
        background: '#fff',
        borderBottom: '1px solid #dde4eb',
        boxShadow: '0 2px 5px #00000008',
        display: 'flex',
        height: '50px',
        justifyContent: 'space-between',
        padding: '0 30px',
        width: '100vw',
        marginBottom: '20px'
    }
    const containerHeaderTitle = {
        color: '#333948',
        fontSize: '16px',
        letterSpacing: '.5px',
    }
    return (
        <div style={containerHeader}>
            <div>
                <span style={containerHeaderTitle}>{ '' }</span>
            </div>
        </div>
    )
}

export default Toolbar;
