# Generated by Django 4.2.16 on 2024-10-20 03:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0008_alter_currencyvalues_value_in_usd'),
    ]

    operations = [
        migrations.AlterField(
            model_name='currencyvalues',
            name='value_in_usd',
            field=models.DecimalField(decimal_places=20, max_digits=1000),
        ),
    ]
