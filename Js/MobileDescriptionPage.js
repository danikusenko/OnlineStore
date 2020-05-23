const phone_description = `
<h1 class="title">Mobile.Name</h1>
	<div class="phone-container-in-description">
		<div class="phone-container-in-description__phone-photo">
			<img id=phonePhoto width="250px">
		</div>
		<div class="phone-container-in-description__phone-detail">
			<div class="phone-container-in-description__result-tools">
				<div class="phone-container-in-description__price-and-available">
					<span class="phone-container-in-description__price">Mobile.Price&nbsp;р.</span>								
					<span id="inStock">В наличии</span>		
					<span id="notAvailable">Нет на складе</span>	
				</div>					
				<input id="toBasket" type="button" name="toBasket" value="В корзину">
			</div>			
			<div class="phone-container-in-description__phone-characteristics">								
				<table>
					<tr>
						<th colspan="2">Основные характеристики</th>
					</tr>					
					<tr>
						<td>Тип устройства</td>
						<td class="phone-container-in-description__type">Mobile.Type</td>						
					</tr>
					<tr>
						<td>Платформа</td>
						<td class="phone-container-in-description__platform">Mobile.Platform</td>						
					</tr>
					<tr>
						<td>Кол-во SIM-карт</td>
						<td class="phone-container-in-description__sim-cards-number">Mobile.SimCardsNumber</td>	
					</tr>
				</table>	
				<table>
					<tr>
						<th colspan="2">Корпус</th>
					</tr>
					<tr>
						<td>Цвет корпуска</td>
						<td class="phone-container-in-description__body-color">Mobile.BodyColor</td>
					</tr>
					<tr>
						<td>Материал корпуса</td>
						<td class="phone-container-in-description__body-material">Mobile.BodyMaterial</td>						
					</tr>					
				</table>	
				<table>
					<tr>
						<th colspan="2">Процессор</th>
					</tr>
					<tr>
						<td>Процессор</td>
						<td class="phone-container-in-description__processor">Mobile.Processor</td>
					</tr>
					</tr>
					<tr>
						<td>Количество ядер процессора</td>
						<td class="phone-container-in-description__number-of-cores">Mobile.Cores</td>
					</tr>
				</table>
				<table>
					<tr>
						<th colspan="2">Экран</th>
					</tr>
					<tr>
						<td>Разрешение экрана</td>
						<td class="phone-container-in-description__screen-resolution">Mobile.ScreenResolution</td>
					</tr>
					</tr>
					<tr>
						<td>Соотношение сторон экрана </td>
						<td class="phone-container-in-description__screen-aspect-ratio">Mobile.ScreenAspectRatio</td>						
					</tr>
					<tr>
						<td>Технология экрана</td>
						<td class="phone-container-in-description__screen-technology">Mobile.ScreenTechnology</td>	
					</tr>
				</table>	
				<table>
					<tr>
						<th colspan="2">Память</th>
					</tr>
					<tr>
						<td>Оперативная память</td>
						<td class="phone-container-in-description__RAM">Mobile.RAM</td>
					</tr>
					</tr>
					<tr>
						<td>Постоянная память</td>
						<td class="phone-container-in-description__internal-memory">Mobile.PersistentMemory</td>				
					</tr>
					<tr>
						<td>Поддержка карт памяти</td>
						<td class="phone-container-in-description__memory-card-support">Mobile.MemoryCardSupport</td>	
					</tr>
				</table>	
				<table>
					<tr>
						<th colspan="2">Датчики</th>
					</tr>
					<tr>
						<td>Акселерометр</td>
						<td class="phone-container-in-description__accelerometer">Mobile.Accelerometer</td>
					</tr>
					</tr>
					<tr>
						<td>Датчик освещенности</td>
						<td class="phone-container-in-description__light-sensor">Mobile.LightSensor</td>						
					</tr>
					<tr>
						<td>Датчик приближения</td>
						<td class="phone-container-in-description__proximity-sensor">Mobile.ProximitySensor</td>	
					</tr>
				</table>
			</div>
		</div>		
	</div>
	<div class="phone-container-in-description__phone-characteristics-in-mobile-version">
	</div>
`