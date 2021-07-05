"""empty message

<<<<<<< HEAD:migrations/versions/7e70f5e24ffb_.py
Revision ID: 7e70f5e24ffb
Revises: 
Create Date: 2021-07-02 09:23:57.470327
=======
Revision ID: ad3b2cf42353
Revises: 
Create Date: 2021-06-28 17:17:16.274616
>>>>>>> e14462a2dc550cb55098d1c12909c9be496366b9:migrations/versions/ad3b2cf42353_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<< HEAD:migrations/versions/7e70f5e24ffb_.py
revision = '7e70f5e24ffb'
=======
revision = 'ad3b2cf42353'
>>>>>>> e14462a2dc550cb55098d1c12909c9be496366b9:migrations/versions/ad3b2cf42353_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('specialty',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('surname', sa.String(length=120), nullable=False),
    sa.Column('phone', sa.String(length=50), nullable=True),
    sa.Column('picture', sa.String(length=120), nullable=True),
    sa.Column('profesional', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('phone')
    )
    op.create_table('disease',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('information', sa.Text(), nullable=False),
    sa.Column('image', sa.String(length=120), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('service',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('information', sa.Text(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('specialties_users',
    sa.Column('specialty_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['specialty_id'], ['specialty.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('specialty_id', 'user_id')
    )
    op.create_table('diseases_services',
    sa.Column('disease_id', sa.Integer(), nullable=False),
    sa.Column('service_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['disease_id'], ['disease.id'], ),
    sa.ForeignKeyConstraint(['service_id'], ['service.id'], ),
    sa.PrimaryKeyConstraint('disease_id', 'service_id')
    )
    op.create_table('diseases_specialties',
    sa.Column('disease_id', sa.Integer(), nullable=False),
    sa.Column('specialty_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['disease_id'], ['disease.id'], ),
    sa.ForeignKeyConstraint(['specialty_id'], ['specialty.id'], ),
    sa.PrimaryKeyConstraint('disease_id', 'specialty_id')
    )
    op.create_table('post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=False),
    sa.Column('info', sa.Text(), nullable=False),
    sa.Column('image', sa.String(length=120), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('disease_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['disease_id'], ['disease.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('title')
    )
    op.create_table('comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('information', sa.Text(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['post_id'], ['post.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comment')
    op.drop_table('post')
    op.drop_table('diseases_specialties')
    op.drop_table('diseases_services')
    op.drop_table('specialties_users')
    op.drop_table('service')
    op.drop_table('disease')
    op.drop_table('user')
    op.drop_table('specialty')
    # ### end Alembic commands ###