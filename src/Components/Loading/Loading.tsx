import './loading.sass'

interface PropsLoading {
	color: string
}

const Loading = ({ color }: PropsLoading) => {
	return (
		<div className="content-loading">
			<svg
				width="182"
				height="97"
				viewBox="0 0 182 97"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g className="cart-svg">
					<path
						d="M94.497 79.4974C94.2699 80.3817 93.4728 81 92.5598 81L47.0959 81C45.9138 81 44.9895 79.98 45.1056 78.8036L48.8889 40.4615H40C39.4477 40.4615 39 40.0138 39 39.4615V37C39 36.4477 39.4477 36 40 36H51.1315C52.3118 36 53.2354 37.0168 53.1223 38.1917L51.5444 54.5775C51.4312 55.7524 52.3549 56.7692 53.5352 56.7692H94.8339C95.2373 56.7692 95.6012 56.5268 95.7567 56.1545L96.9772 53.2313C97.2522 52.5726 96.7683 51.8461 96.0544 51.8461H57.6667C57.1144 51.8461 56.6667 51.3983 56.6667 50.8461V47.3845C56.6667 46.8322 57.1144 46.3845 57.6667 46.3845H100.422C101.728 46.3845 102.684 47.6166 102.359 48.882L94.497 79.4974Z"
						fill={color}
					/>
					<circle cx="49" cy="88" r="5" fill={color} />
					<circle cx="87" cy="88" r="5" fill={color} />

					<line x1="38" x2="48" y1="91" y2="91" stroke={color} />
					<line x1="75" x2="86" y1="91" y2="91" stroke={color} />
				</g>

				<circle className="ball" cx="68" cy="70" r="6" fill={color} />
				<circle className="ball" cx="71" cy="70" r="6" fill={color} />
				<circle className="ball" cx="77" cy="70" r="6" fill={color} />
			</svg>
			<span style={{ color: color }}>Carregando...</span>
		</div>
	)
}
export default Loading
