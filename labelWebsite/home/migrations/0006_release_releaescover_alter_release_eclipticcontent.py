# Generated by Django 5.0.4 on 2024-04-26 01:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_release'),
    ]

    operations = [
        migrations.AddField(
            model_name='release',
            name='releaesCover',
            field=models.ImageField(blank=True, null=True, upload_to='image', verbose_name='Обложка'),
        ),
        migrations.AlterField(
            model_name='release',
            name='eclipticContent',
            field=models.ImageField(max_length=16, upload_to='', verbose_name='Нецензурная лексика'),
        ),
    ]