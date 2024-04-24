from django.db import models

class Articles(models.Model):
    title = models.CharField('Название', max_length=42)
    full_text = models.TextField('Статья', max_length=512)
    date = models.DateTimeField('Дата публикации')

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'


class Release(models.Model):
    releaseName = models.CharField('Название релиза', max_length=64)
    artistName = models.CharField('Никнейм артиста', max_length=64)
    releaseGenre = models.CharField('Жанр', max_length=64)
    releaseType = models.CharField('Тип релиза', max_length=32)
    artistLink = models.CharField('Ссылка на профиль артиста', max_length=512)
    releaseUPC = models.CharField('UPC', max_length=32)
    releaseDate = models.DateTimeField('Дата релиза')
    artistRealName = models.CharField('ФИО Ариста', max_length=256)
    eclipticContent = models.CharField('Нецензурная лексика', max_length=16)

    def __str__(self):
        return self.releaseName
    
    class Meta:
        verbose_name = 'Релиз'
        verbose_name_plural = 'Релизы'