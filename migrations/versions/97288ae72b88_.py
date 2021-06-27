"""empty message

Revision ID: 97288ae72b88
Revises: 42d1a880ea35
Create Date: 2021-06-21 18:51:03.376689

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '97288ae72b88'
down_revision = '42d1a880ea35'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'phone',
               existing_type=sa.VARCHAR(length=50),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'phone',
               existing_type=sa.VARCHAR(length=50),
               nullable=False)
    # ### end Alembic commands ###