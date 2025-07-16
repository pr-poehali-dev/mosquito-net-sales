import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    {
      id: 1,
      name: 'Рамочная сетка стандарт',
      price: '2 500 ₽',
      description: 'Алюминиевая рама, стандартный размер',
      image: '/img/bf8a40c5-78d9-490f-b8ba-a45a0b953900.jpg',
      inStock: true
    },
    {
      id: 2,
      name: 'Рамочная сетка премиум',
      price: '3 500 ₽',
      description: 'Усиленная алюминиевая рама, улучшенная сетка',
      image: '/img/0bbcc9c5-d164-4704-8fe4-d1e5bcd503e8.jpg',
      inStock: true
    },
    {
      id: 3,
      name: 'Рамочная сетка эконом',
      price: '1 800 ₽',
      description: 'Пластиковая рама, базовая защита',
      image: '/img/1325a5a6-53fb-4549-a00a-53add5bc925a.jpg',
      inStock: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Grid3X3" size={24} className="text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Mosquito Nets Store</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#custom" className="text-gray-700 hover:text-blue-600 transition-colors">На заказ</a>
              <a href="#delivery" className="text-gray-700 hover:text-blue-600 transition-colors">Доставка</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Moskito Nets
                <span className="text-blue-600 block">Store</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Качественные рамочные москитные сетки для защиты вашего дома. 
                Изготовление на заказ и готовые решения в каталоге.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Icon name="Ruler" size={20} className="mr-2" />
                  Заказать по размерам
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/479834c7-d7f3-43a6-aa39-1cfb125163f6.jpg" 
                alt="Москитная сетка на окне"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Надёжная защита</h3>
              <p className="text-gray-600">Качественные материалы и прочная конструкция</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставка по Москве и области за 1-2 дня</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Установка</h3>
              <p className="text-gray-600">Профессиональная установка с гарантией</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Каталог рамочных сеток</h2>
            <p className="text-xl text-gray-600">Готовые решения для стандартных окон</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.inStock ? (
                    <Badge className="absolute top-2 right-2 bg-green-500">В наличии</Badge>
                  ) : (
                    <Badge variant="secondary" className="absolute top-2 right-2">Под заказ</Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <Button 
                      variant={product.inStock ? "default" : "outline"}
                      className={product.inStock ? "bg-blue-600 hover:bg-blue-700" : ""}
                    >
                      {product.inStock ? "Купить" : "Заказать"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order */}
      <section id="custom" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Изготовление на заказ</h2>
              <p className="text-xl text-gray-600 mb-8">
                Создаём москитные сетки по индивидуальным размерам для любых окон и дверей.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Точные размеры под ваши проёмы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Выбор цвета рамы и типа сетки</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Гарантия 2 года на изделие</span>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Как заказать?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Замер</h4>
                    <p className="text-gray-600">Наш мастер приедет и сделает точные замеры</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Изготовление</h4>
                    <p className="text-gray-600">Производим сетку в течение 2-3 дней</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Установка</h4>
                    <p className="text-gray-600">Устанавливаем и проверяем качество</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery & Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div id="delivery">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Доставка</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-blue-600" />
                  <span className="text-gray-700">Москва и область — от 500 ₽</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-blue-600" />
                  <span className="text-gray-700">Доставка в течение 1-2 дней</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Package" size={20} className="text-blue-600" />
                  <span className="text-gray-700">Бесплатная доставка от 5000 ₽</span>
                </div>
              </div>
            </div>
            <div id="contacts">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Контакты</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <span className="text-gray-700">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <span className="text-gray-700">info@mosquitonets.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-blue-600" />
                  <span className="text-gray-700">г. Москва, ул. Примерная, д. 123</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Grid3X3" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">Mosquito Nets Store</span>
              </div>
              <p className="text-gray-400">
                Качественные москитные сетки для вашего комфорта
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Рамочные сетки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">На заказ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Комплектующие</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Замер</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Установка</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Mosquito Nets Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;