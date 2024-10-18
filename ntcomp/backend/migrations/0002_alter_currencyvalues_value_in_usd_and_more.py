# Generated by Django 4.2.16 on 2024-10-18 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='currencyvalues',
            name='value_in_usd',
            field=models.DecimalField(decimal_places=10, max_digits=10),
        ),
        migrations.AlterField(
            model_name='transactions',
            name='Amount',
            field=models.DecimalField(decimal_places=10, max_digits=20),
        ),
        migrations.AlterField(
            model_name='userassets',
            name='Amount',
            field=models.DecimalField(decimal_places=10, max_digits=20),
        ),
    ]
