
export interface Audiences {
    id: number,
    name: string,
    info: string,
    price: number,
    image: string,
    corpus: string,
    status: number
}
// name = models.CharField(max_length=1000, default="501", verbose_name="Номер")
// number = models.CharField(max_length=1000, verbose_name="Номер")
// price = models.FloatField(default=5000.00, verbose_name="Цена")
// info = models.TextField(max_length=250, verbose_name="Информация", null=True)
// image = models.ImageField(verbose_name="Фото", null=False)
// corpus = models.TextField(max_length=20, verbose_name="Корпус")
// status = models.IntegerField(max_length=100, choices=STATUS_CHOICES, default=1, verbose_name="Статус")

// export interface Pioneer {
//     id: number,
//     name: string,
//     description: string,
//     status: number,
//     image: string,
//     date_birthday: number,
//     date_death: number
// }