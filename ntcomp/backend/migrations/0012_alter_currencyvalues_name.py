# Generated by Django 4.2.16 on 2024-10-20 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0011_alter_currencyvalues_value_in_usd'),
    ]

    operations = [
        migrations.AlterField(
            model_name='currencyvalues',
            name='Name',
            field=models.CharField(default=None, max_length=100, unique=True),
        ),
    ]
