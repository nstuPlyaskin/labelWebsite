# Generated by Django 5.0.4 on 2024-04-17 22:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_articles_news_img'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='articles',
            name='news_img',
        ),
    ]